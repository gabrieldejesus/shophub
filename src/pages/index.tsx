import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { Title } from '@/styles/pages/Home';
import { Header } from '@/styles/pages/Home';
import { Container } from '@/styles/pages/Home';
import Logo from '@/components/Logo';
import Cart from '@/components/Cart';
import Search from '@/components/Search';
import SEO from '@/components/SEO';
import { client } from '@/lib/prismic';
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents'

interface HomeProps {
  recommendedProducts: Document[];
}

export default function Home({ recommendedProducts }: HomeProps) {
  return (
    <>

      <SEO
        title="ShopHub"
        shouldExcludeTitleSuffix
      />

      <Header>
        <Container>
          <div className="logo"><Logo /></div>
          <div className="menu">
            <ul>
              <li className="active">Início</li>
              <li>Ofertas</li>
              <li>Blog</li>
              <li>Contato</li>
            </ul>
          </div>
          <div className="cart"><Cart /></div>
        </Container>
      </Header>

      <section>
        <Container>
          <div className="banner"></div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="container-products">

            <div><Title>Início</Title></div>

            <div>
              <ul>
                {recommendedProducts.map(recommendedProduct => {
                  return (
                    <li key={recommendedProduct.id}>
                      <Link href={`/catalog/products/${recommendedProduct.uid}`}>
                        <a>
                          <img
                            src={recommendedProduct.data.thumbnail.url}
                            alt={PrismicDOM.RichText.asText(recommendedProduct.data.title)}
                            title={PrismicDOM.RichText.asText(recommendedProduct.data.title)}
                          />
                          <span>{PrismicDOM.RichText.asText(recommendedProduct.data.title)}</span>
                          R$ {recommendedProduct.data.price}
                        </a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

          </div>
        </Container>
      </section>

    </>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const recommendedProducts = await client().query([
    Prismic.Predicates.at('document.type', 'product')
  ]);
  
  return {
    props: {
      recommendedProducts: recommendedProducts.results,
    }
  }
}