import { client } from '@/lib/prismic';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import PrismicDOM from 'prismic-dom';
import { Container } from '@/styles/pages/Home';
import { Title } from '@/styles/pages/Product';
import { Header } from '@/styles/pages/Home';
import Logo from '@/components/Logo';
import Cart from '@/components/Cart';
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
    <>
      <Header>
        <Container>
          <div className="logo"><Logo /></div>
          <div className="menu">
            <ul>
              <li>Início</li>
              <li className="active">Ofertas</li>
              <li>Blog</li>
              <li>Contato</li>
            </ul>
          </div>
          <div className="cart"><Cart /></div>
        </Container>
      </Header>

      <section className="container-product" >
        <Container>
          <div className="product">
            <div>
              {/* thumbnail do produto */}
              <img src={product.data.thumbnail.url} width="400"
                alt={PrismicDOM.RichText.asText(product.data.title)}
                title={PrismicDOM.RichText.asText(product.data.title)}
              />
            </div>

            <div>
              {/* titulo do produto */}
              <Title>{PrismicDOM.RichText.asText(product.data.title)}</Title>

              {/* convertendo para html */}
              {/* descrição do produto */}
              <div className="description" dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(product.data.description) }}></div>
              {/* preço do produto */}
              <div className="price-and-buy">
                <span>${product.data.price}</span>
                <div className="buy">Comprar</div>
              </div>

            </div>
          </div>
        </Container>
      </section>
    </>
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
