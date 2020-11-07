import { client } from '@/lib/prismic';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import PrismicDOM from 'prismic-dom';
import Prismic from 'prismic-javascript';
import { Document } from 'prismic-javascript/types/documents';

interface ProductProps {
  product: Document;
}

export default function Product({ product }: ProductProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      {/* titulo do produto */}
      <h1>{PrismicDOM.RichText.asText(product.data.title)}</h1>

      {/* thumbnail do produto */}
      <img src={product.data.thumbnail.url} width="300" 
        alt={PrismicDOM.RichText.asText(product.data.title)} 
        title={PrismicDOM.RichText.asText(product.data.title)}
      />

      {/* convertendo para html */}
      {/* descrição do produto */}
      <div dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(product.data.description) }}></div>

      {/* preço do produto */}
      <p>Price: ${product.data.price}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
    
  return {
      paths: [],
      fallback: true,
  }
};

// quais são as propriedades que eu quero da para essa página para ela se tornar estatica
export const getStaticProps: GetStaticProps<ProductProps> = async (context) => {
const { slug } = context.params;

const product = await client().getByUID('product', String(slug), {});

return {
  props: {
    product,
  },
  revalidate: 5,
};
};
