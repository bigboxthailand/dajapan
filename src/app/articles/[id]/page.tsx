import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ArticleDetailClient from "@/components/ArticleDetailClient";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return {
      title: "Article Not Found | DaJapan",
    };
  }

  return {
    title: article.seo.title,
    description: article.seo.description,
    keywords: article.seo.keywords,
    openGraph: {
      title: article.seo.title,
      description: article.seo.description,
      images: [article.image],
    },
  };
}

export default async function ArticleDetail({ params }: Props) {
  const { id: idStr } = await params;
  const id = parseInt(idStr);
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return notFound();
  }

  return <ArticleDetailClient article={article} />;
}
