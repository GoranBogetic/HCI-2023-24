import Link from 'next/link';

export interface TypeThermosListItem {
  name: string;
  description: string;
  imageLink: string;
}

interface ThermosCollectionResponse {
  thermosCollection: {
    items: ThermosItem[];
  };
}

interface ThermosItem {
  name: string;
  description: string;
  imageLink: string;
}

const Thermoses = async () => {
  const baseUrl = `https://graphql.contentful.com/content/v1/spaces/7ku0ysenhiwg/environments/master`;

  const gqlGetThermosesQuery = `query ThermosList {
		thermosCollection {
			items {
				name,
				description,
				imageLink
			}
		}
	}`;

  const getAllThermoses = async (): Promise<TypeThermosListItem[]> => {
    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer Ok1oRhn9O3E0Ild34lXPsTw_4pWQo5SwBNq0O6qoNJc`,
        },
        body: JSON.stringify({ query: gqlGetThermosesQuery }),
      });

      const body = (await response.json()) as {
        data: ThermosCollectionResponse;
      };

      const thermoses: TypeThermosListItem[] = body.data.thermosCollection.items.map((item) => ({
        name: item.name,
        description: item.description,
        imageLink: item.imageLink,
      }));

      return thermoses;
    } catch (error) {
      console.log(error);

      return [];
    }
  };

  const thermoses = await getAllThermoses();

  return (
    <h1>
      <nav className="subNavbar">
        <Link href="/accessories">Accessories</Link>
        <Link href="/accessories/mugs">Coffee Mugs and Cups</Link>
        <Link href="/accessories/thermoses">Travel Cups and Thermoses</Link>
      </nav>
      <span className="text">Travel Cups and Thermoses</span>
      <div>
        {thermoses.map((thermos) => (
          <div key={thermos.name}>
            <h3>{thermos.name}</h3>
            <p>{thermos.description}</p>
            <img src={thermos.imageLink} alt={thermos.name} />
          </div>
        ))}
      </div>
    </h1>
  );
};

export default Thermoses;
