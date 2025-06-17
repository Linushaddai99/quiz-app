  export interface ChoiceType {
    amount: number,
    category: number,
    difficulty: string,
    type: string,
  };

  export type Category = {
    id: number;
    name: string;
  };

  export interface CategoriesState {
    categories: Category[];
    status: 'idle' | 'loading' | 'failed';
    error: string | null;
  }

  export type Question = {
    type: 'multiple' | 'boolean'; // you can extend this if other types exist
    difficulty: 'easy' | 'medium' | 'hard';
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  };

  export interface QuestionsState {
    questions: Question[];
    status: 'idle' | 'loading' | 'failed';
    error: string | null;
  }

