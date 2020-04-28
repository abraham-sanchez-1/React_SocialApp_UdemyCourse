export interface IActivity {
    id: string;
    title: string;
    description: string;
    date: Date;
    city: string;
    venue: string;
    category: string;
}

export interface IActivityFormValues extends Partial<IActivity> {
time?: Date;
}