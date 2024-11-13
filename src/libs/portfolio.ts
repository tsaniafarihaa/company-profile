import resolveResponse from "contentful-resolve-response";

export const getPort = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CONTENTFUL_BASE_URL}/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN}&content_type=portfolio`,
    {
      next: { revalidate: 3600 },
    }
  );

  const data = await res.json();
  const result = resolveResponse(data);
  return result;
};
