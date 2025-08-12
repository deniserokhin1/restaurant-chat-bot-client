import { defineStore } from 'pinia'
import { ChatFeedItemsEnum, DishType, MessageSide, type ChatFeedItems, type ChatFeedStoreActions, type ChatFeedStoreState } from './types'
import { sendQuery } from '../api'

export const useChatFeedStore = defineStore<string, ChatFeedStoreState, {}, ChatFeedStoreActions>(
    'chatFeed',
    {
        state: () => (
            { feed: [] }
        ),
        actions: {
            async getLlmAnswer(query) {
                const llmAnswer = await sendQuery(query)

                const dishes = llmAnswer.answer.map((item) => ({
                    type: DishType.ACTIVE,
                    dishes: item.data.active
                }))

                const llmText = llmAnswer.answer.map((item) => ({
                    type: MessageSide.SYSTEM,
                    text: item.text.replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>')
                }))

                const dataOrdered: ChatFeedItems[] = []
                llmAnswer.answer.forEach((_, idx) => {
                    dataOrdered.push(llmText[idx])
                    dataOrdered.push(dishes[idx])
                })

                this.feed = [...this.feed.slice(0, this.feed.length - 1), ...dataOrdered ]
            },
            addUserQuery(text) {
                this.feed = [
                    ...this.feed,
                    { type: MessageSide.USER, text },
                    { type: ChatFeedItemsEnum.LOADING }
                ]
            },
            errorHandler(e) {
                this.feed = [
                    ...this.feed.slice(0, this.feed.length - 1),
                    { type: MessageSide.SYSTEM, text: e.message }
                ]
            }
        }
    },
)

export type ChatFeedStore = ReturnType<typeof useChatFeedStore>;
