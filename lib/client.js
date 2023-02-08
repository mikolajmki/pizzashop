import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: "gtn4i6c0",
    dataset: 'production',
    apiVersion: '2023-01-03',
    useCdn: true,
    token: "skV5vXQpjW5HdZEP2Z3Bspm3KTJbXiYD2dCXf13Gr5NsNgc90G8BfvILkwKPLLqZi19TI5QQJlhcq7kPQjkSb8IQiyF3yDsSFBIYDu5K57xqNPIO1bqJUsTGVoYSbVqmUPw45ipURKRAsKw1cmJePD9Cdmbuw9dCpVE8LjTATCv9ugTTv1ZU"
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);