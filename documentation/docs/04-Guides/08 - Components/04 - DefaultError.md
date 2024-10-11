---
slug: /components/default-error
sidebar_label: DefaultError
title: DefaultError
id: default-error
keywords: [DefaultError, Error, boundary]
---

The molecule `DefaultError` component is used into the [`ErrorBoundary` component](/docs/components/error-boundary) as the default error UI.
This component is composed of `Text` components and a `Button` to reset the error (for re-executing the query for example).

### Props

| Name       | Type   | Default | Description                                                                                   |
|------------|--------|---------|-----------------------------------------------------------------------------------------------|
| onReset    | function  |         | The required function to reset the error.               |