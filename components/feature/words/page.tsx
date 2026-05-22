import { MainContainer } from '@/components/feature/words/MainCointaner';
import { ProgressStatus } from '@/components/feature/words/ProgressStatus';
import { WordList } from '@/components/feature/words/WordList';

export default function WordsPage() {
  return (
    <MainContainer>
      <ProgressStatus />
      <WordList />
    </MainContainer>
  );
}