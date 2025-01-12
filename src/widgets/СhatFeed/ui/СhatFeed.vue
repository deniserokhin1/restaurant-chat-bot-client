<template>
    <div class="main">
        <Stack
            class="wrapper"
            direction="column"
            justify="between"
            :gap="16"
        >
            <div class="ai-answer" v-for="item in feed">
                <TextBlock
                    v-if="item.type === MessageSide.USER"
                    :side="'user'"
                    :text="
                        item.text.charAt(0).toUpperCase() +
                        item.text.slice(1)
                    "
                />
                <Loader
                    v-if="
                        item.type === ChatFeedItemsEnum.LOADING
                    "
                />
                <div
                    v-if="
                        item.type === DishType.ACTIVE &&
                        item.dishes.length > 0
                    "
                    class="goods-container"
                >
                    <ProductCard
                        v-for="{
                            id,
                            title,
                            price,
                            url,
                        } in item.dishes"
                        :key="id"
                        :title="title"
                        :price="price"
                        :url="url"
                    />
                </div>
                <CardBg
                    v-if="item.type === MessageSide.SYSTEM"
                    :text-align="TextAlign.START"
                >
                    <div v-html="item.text" />
                </CardBg>
            </div>
        </Stack>
        <LLMRequest />
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { TextBlock, Stack, Loader, TextAlign, CardBg } from '@/shared'
import {
    ChatFeedItemsEnum,
    DishType,
    MessageSide,
    useChatFeedStore,
    ProductCard,
} from '@/entities'
import { LLMRequest } from '@/features'

const chatFeedStore = useChatFeedStore()
const { feed } = storeToRefs(chatFeedStore)
</script>

<style scoped>
.main {
    width: 100vw;
    height: 100vh;
}

.ai-answer {
    display: flex;
    width: 100%;
    flex-direction: column;
    row-gap: 16px;
}

.user-query-wrapper {
    display: flex;
    justify-content: end;
}

.input-query-wrapper {
    display: flex;
    justify-content: end;
    padding: 0 16px;
}

.wrapper {
    padding: 16px;
    min-height: 15vh;
    max-height: 80vh;
    display: flex;
    overflow: scroll;
}

.goods-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
}

.text-block {
    width: fit-content;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    padding: 16px;
}

.text-block--user {
    width: fit-content;
    text-align: end;
}
</style>
