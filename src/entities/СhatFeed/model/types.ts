export type ChatFeedItems = MessageType | ChatFeedDishes | Loading

export enum ChatFeedItemsEnum {
    USER = 'user',
    SYSTEM = 'system',
    LOADING = 'loading',
}

export type ChatFeedDishes = {
    type: DishType,
    dishes: Dish[]
}

export type Loading = {
    type: ChatFeedItemsEnum.LOADING,
}

export type ChatFeedStoreState = {
    feed: ChatFeedItems[]
}

export type ChatFeedStoreActions = {
    getLlmAnswer(query: string): Promise<void>
    addUserQuery(query: string): void
    errorHandler(e: Error): void
}

export enum MessageSide {
    USER = 'user',
    SYSTEM = 'system',
}

export enum DishType {
    ACTIVE = 'active',
    ADD = 'add',
}

export type MessageType = {
    text: string
    type: MessageSide
}

export type Dish = {
    id: number;
    ingredients: string;
    price: string;
    title: string;
    url: string;
};

export type ResponseItem = {
    text: string;
    data: {
        active: Dish[];
        add: Dish[];
    };
    query: string;
};

export type Response = {
    answer: ResponseItem[];
    totalCost: string;
};
