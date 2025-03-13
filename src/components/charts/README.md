# Chart Components

This directory contains individual chart components that are dynamically loaded by the ChartBlock component.

## Chart Structure

- Each chart is a standalone React component
- Charts receive props from the ChartBlock component
- All charts should accept at least a `className` prop for styling

## Adding a New Chart

To add a new chart:

1. Create a new chart component in this directory (e.g., `RevenueChart.tsx`)
2. Implement the chart using the following interface:
   ```typescript
   interface ChartProps {
     className?: string;
     [key: string]: any; // For any additional props
   }
   ```
3. Register the chart in `src/components/blocks/ChartBlock/index.tsx` by adding it to the `chartComponents` object:
   ```typescript
   export const chartComponents = {
     // ... existing charts
     'revenue': dynamic(() => import('../../charts/RevenueChart'), {
       loading: () => <div>Loading revenue chart...</div>,
       ssr: false
     })
   };
   ```

## Using Charts

Charts are used through the ChartBlock component:

```jsx
<ChartBlock type="egg-price" className="h-96" />
```

The `type` prop corresponds to the key in the `chartComponents` object in the ChartBlock component.
