---
slug: /components/skeleton
sidebar_label: Skeleton
title: Skeleton
id: skeleton
keywords: [skeleton, loading, animation]
---

The atomic `Skeleton` component is a helper component that allows you to display a loading animation while the content is loading. This component is particularly useful when you need to display a loading animation while the content is loading by presenting a placeholder UI of all the components to the user.

### Usage

```jsx
import { AssetByVariant, IconByVariant, Skeleton } from '@/components/atoms';

function Example() {
  const fetchOneUserQuery = useFetchOneQuery(currentId); // fetchOneUserQuery is a react-query query

  return (
    <Skeleton
      loading={fetchOneUserQuery.isLoading}
    >
      <Text>{user.name}</Text>
    </Skeleton>
  );
}

export default Example;

```

So the user name will be displayed when the `fetchOneUserQuery` is not loading, otherwise, the `Skeleton` component will display a loading animation.

### Props

| Name       | Type   | Default | Description                                                                                   |
|------------|--------|---------|-----------------------------------------------------------------------------------------------|
| loading    | boolean |         | The required boolean value to determine whether the content is loading or not.               |
| children   | ReactNode |         | The required children to be displayed.                                                     |
| height     | DimensionValue | 24    | The duration of the loading animation in milliseconds.                                  |
| width      | DimensionValue | '100%'    | The duration of the loading animation in milliseconds.                              |
| ...props   | ViewProps |  | all props from `View` component are supported.                                                    |