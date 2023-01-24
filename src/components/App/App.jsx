import {
  BlogCard,
  Container,
  Section,
  Heading,
  Statistics,
  ForbesList,
  CryptoHistory,
} from 'components';

import article from '../../data/article';
import data from '../../data/data';
import forbes from '../../data/forbes';
import transactions from '../../data/transactions';

export const App = () => {
  const { poster, tag, title, description, name, avatar, postedAt } = article;
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>
        <BlogCard
          poster={poster}
          tag={tag}
          title={title}
          description={description}
          userName={name}
          avatar={avatar}
          postedAt={postedAt}
        />
        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>
        <Statistics stats = {data}/>

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <ForbesList list={forbes}/>

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        <CryptoHistory items={transactions} />
      </Container>
    </Section>
  );
};
