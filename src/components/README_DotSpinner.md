# DotSpinner Loader Component

A beautiful, customizable dot spinner loader component built with Tailwind CSS for the SPR Naturals website.

## Features

- 🎨 **Customizable Colors**: Primary (nature-green), Secondary (leaf-green), and White variants
- 📏 **Multiple Sizes**: Small, Medium, and Large options
- ⚡ **Smooth Animations**: CSS-based animations with proper timing
- 🎯 **TypeScript Support**: Full type safety and IntelliSense
- 📱 **Responsive**: Works perfectly on all device sizes

## Usage

### Basic Usage

```tsx
import DotSpinner from '@/components/DotSpinner';

// Basic spinner
<DotSpinner />

// With custom size
<DotSpinner size="lg" />

// With custom color
<DotSpinner color="white" />

// With custom className
<DotSpinner className="mx-auto" />
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the spinner |
| `color` | `'primary' \| 'secondary' \| 'white'` | `'primary'` | Color theme of the spinner |
| `className` | `string` | `''` | Additional CSS classes |

### Size Reference

- **Small (`sm`)**: 24px × 24px - Perfect for buttons and inline elements
- **Medium (`md`)**: 44px × 44px - Default size for general use
- **Large (`lg`)**: 64px × 64px - Great for full-screen loading overlays

### Color Themes

- **Primary (`primary`)**: Nature green (#2d5a27) - Matches your brand
- **Secondary (`secondary`)**: Leaf green (#4a7c59) - Alternative brand color
- **White (`white`)**: White - For dark backgrounds

## Integration Examples

### 1. Button Loading State

```tsx
<Button disabled={isLoading}>
  {isLoading ? (
    <>
      <DotSpinner size="sm" color="white" className="mr-2" />
      Loading...
    </>
  ) : (
    'Submit'
  )}
</Button>
```

### 2. Full Screen Loading Overlay

```tsx
{isLoading && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <DotSpinner size="lg" className="mb-4" />
      <p className="text-nature-green font-medium">Loading...</p>
    </div>
  </div>
)}
```

### 3. Inline Loading State

```tsx
<div className="flex items-center gap-2">
  <DotSpinner size="sm" />
  <span>Processing your request...</span>
</div>
```

### 4. Card Loading State

```tsx
<Card className="p-6">
  {isLoading ? (
    <div className="flex flex-col items-center gap-4">
      <DotSpinner size="md" />
      <p className="text-muted-foreground">Loading content...</p>
    </div>
  ) : (
    // Your content here
  )}
</Card>
```

## Customization

### Custom Colors

You can extend the color options by modifying the `DotSpinner.tsx` component:

```tsx
const colorClasses = {
  primary: 'bg-nature-green shadow-nature-green',
  secondary: 'bg-leaf-green shadow-leaf-green',
  white: 'bg-white shadow-white',
  custom: 'bg-blue-500 shadow-blue-500', // Add your custom color
};
```

### Custom Animation Duration

Modify the animation duration in `globals.css`:

```css
.animate-pulse-dot {
  animation: pulse-dot 1.5s ease-in-out infinite; /* Change 1s to desired duration */
}
```

### Custom Shadow Colors

Add new shadow colors to `tailwind.config.js`:

```js
boxShadow: {
  'nature-green': '0 0 20px rgba(45, 90, 39, 0.3)',
  'leaf-green': '0 0 20px rgba(74, 124, 89, 0.3)',
  'white': '0 0 20px rgba(255, 255, 255, 0.3)',
  'custom': '0 0 20px rgba(59, 130, 246, 0.3)', // Add your custom shadow
},
```

## Performance Notes

- The component uses CSS animations which are GPU-accelerated
- No JavaScript animations means better performance
- Minimal bundle size impact
- Optimized for smooth 60fps animations

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## Accessibility

- The spinner is purely decorative and doesn't require screen reader announcements
- For loading states, always provide accompanying text
- Use `aria-hidden="true"` if the spinner is purely decorative

## Demo

Check out the `LoaderDemo.tsx` component to see all the different variations and usage examples in action.
