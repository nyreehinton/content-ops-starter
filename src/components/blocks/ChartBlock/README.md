# ChartBlock Component

The ChartBlock component is the main entry point for all chart functionality in the application. It dynamically loads chart components based on the `type` prop.

## Usage

```jsx
<ChartBlock
  type="egg-price"
  className="h-96"
  // Any additional props will be passed to the chart component
/>
```

## Available Chart Types

The following chart types are available:

- `egg-price`: Displays egg price trends over time
- `stock-performance`: Displays stock performance comparison

## Adding New Chart Types

To add a new chart type:

1. Create a new chart component in `src/components/charts/`
2. Add the chart to the `chartComponents` object in this file:

```typescript
export const chartComponents = {
  // ... existing chart types
  'new-chart-type': dynamic(() => import('../../charts/NewChartComponent'), {
    loading: () => <div>Loading new chart...</div>,
    ssr: false
  })
};
```

## Props

| Prop        | Type   | Description                                                          |
| ----------- | ------ | -------------------------------------------------------------------- |
| `type`      | string | The type of chart to display (must match a key in `chartComponents`) |
| `className` | string | Optional CSS class name to apply to the chart container              |
| `...rest`   | any    | Any additional props will be passed to the chart component           |
