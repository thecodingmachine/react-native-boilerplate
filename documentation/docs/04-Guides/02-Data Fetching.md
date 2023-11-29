---
slug: /data-fetching
sidebar_label: Data Fetching
title: Data Fetching
id: data-fetching
keywords: [data fetching, react query, tanstack query, react-query, tanstack-query]
---

Indeed, in the realm of React Native and React development, there are several valuable libraries that can significantly 
simplify data management tasks. One such library is TanStack Query, which has gained popularity for its ability to streamline
data fetching, caching, error handling, and more. It's an excellent choice for integrating into this boilerplate, as it can 
greatly enhance the efficiency and reliability of data management in your application.

## Fetching Data at Startup

This boilerplate offers a convenient method for fetching data before presenting the application content to the user. 
This capability is made possible through the [navigation structure](/docs/navigate#navigation-structure) of the initial 
setup and the inclusion of the `Startup` screen.

The `Startup` screen takes on the role of being the very first screen shown to the user upon launching the application. 
It serves as the entry point where essential data can be fetched and prepared before the user interacts with the app's content. 
This ensures a smoother and more responsive user experience.

```tsx title="src/screens/Startup/Startup.tsx" 
  // highlight-next-line
import { useQuery } from '@tanstack/react-query';

const Startup = ({ navigation }: ApplicationScreenProps) => {
    const { layout, gutters, fonts } = useTheme();
    const { t } = useTranslation(['startup']);
    
    // highlight-start
    const { isSuccess, isFetching, isError } = useQuery({
        queryKey: ['startup'],
        queryFn: () => {
            // Fetch data here
            return Promise.resolve(true);
        },
    });
    // highlight-end
    
    useEffect(() => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Main' }],
        });
    }, [isSuccess]);

    return (
        //...
    );
};
```

The `useQuery` hook is employed for data fetching. Now, let's explore how to formulate the request.

Consider a scenario where we wish to retrieve application settings from an API before the user accesses the application's content. 
To achieve this, we will create a service responsible for fetching this data.

Within the `services` folder, create a file named `startup/fetchSettings.ts`, and include the following code:

```ts title="src/services/startup/fetchSettings.ts"
import { instance } from '@/services/instance';

export default async () => instance.get(`/settings`);
```

The `instance` is an Axios instance that comes pre-configured in the boilerplate.

Next, we will use the `fetchSettings` service within the `Startup` screen.

```tsx title="src/screens/Startup/Startup.tsx" 
import { useQuery } from '@tanstack/react-query';
// highlight-next-line
import fetchSettings from '@/services/startup/fetchSettings';

const Startup = ({ navigation }: ApplicationScreenProps) => {
    const { layout, gutters, fonts } = useTheme();
    const { t } = useTranslation(['startup']);
    
    const { isSuccess, isFetching, isError } = useQuery({
        queryKey: ['startup'],
        // highlight-next-line
        queryFn: fetchSettings,
    });
    
    useEffect(() => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Main' }],
        });
    }, [isSuccess]);

    return (
        //...
    );
};
```

## Advanced usage

Since we've utilized no additional or custom configuration, for further information, 
you should refer to the official documentation of the [library](https://react-query.tanstack.com/).
