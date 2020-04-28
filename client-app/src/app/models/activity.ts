export interface IActivity {
    id: string;
    title: string;
    description: string;
    date: Date | null;
    city: string;
    venue: string;
    category: string;
}