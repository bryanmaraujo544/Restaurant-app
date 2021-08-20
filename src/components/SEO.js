import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'A Quinta do Marquês é uma rede de padarias e restaurantes de alto padrão da AN Holding. Aqui dispomos de uma infra-estrutura completa para o viajantte, além de todas as maravilhas gastronômicas de Portugal',
  author = 'AQDM',
  meta,
  title = 'A Quinta do Marquês - Restaurante e Padaria',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `pt-br`,
  meta: [],
};