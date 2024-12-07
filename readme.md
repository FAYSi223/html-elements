# Custom HTML Elements

This repository contains custom HTML elements that you can use in your projects. Currently, it includes the following elements: `<chat>`, `<countdown-timer>`, `<card>`, `<date-picker>`, and `<search-bar>`.

## Installation

To include the custom elements in your HTML, add the following script tags in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/FAYSi223/html-elements@v1.0.7/chat.js"></script>
<script src="https://cdn.jsdelivr.net/gh/FAYSi223/html-elements@v1.0.7countdown.js"></script>
<script src="https://cdn.jsdelivr.net/gh/FAYSi223/html-elements@v1.0.7/cards.js"></script>
<script src="https://cdn.jsdelivr.net/gh/FAYSi223/html-elements@v1.0.7/date-picker.js"></script>
<script src="https://cdn.jsdelivr.net/gh/FAYSi223/html-elements@v1.0.7/search-bar.js"></script>
```

## Custom Elements Overview

### 1. `<chat></chat>`
A simple chat interface that can be used to implement real-time chat functionality in your project.

#### Example:
```html
<chat></chat>
```

---

### 2. `<countdown-timer end-date="2025-01-01T00:00:00"></countdown-timer>`
A customizable countdown timer that counts down to a specified date.

#### Attributes:
- `end-date` (required): The date and time to count down to in ISO format (`YYYY-MM-DDTHH:MM:SS`).
- You can also customize the timer with styles using attributes like `font-size`, `text-color`, `bg-color`, etc.

#### Example:
```html
<countdown-timer end-date="2025-01-01T00:00:00"></countdown-timer>
```

---

### 3. `<card></card>`
A card component that stands out from the background and allows text and other content inside. You can customize its appearance with CSS.

#### Example:
```html
<card>
    <h1>Test Card</h1>
    <p>This is an example card element.</p>
</card>
```

#### Attributes:
- Customizable via CSS for background, padding, border, etc.
- The card has built-in styles but can be fully customized in your project's CSS.

---

### 4. `<date-picker></date-picker>`
A native date picker component that works uniformly across all browsers.

#### Example:
```html
<date-picker placeholder="Select a date"></date-picker>
```

#### Attributes:
- `placeholder`: The text to display when no date has been selected.
- Works with standard `<input type="date">` functionality but provides a more consistent UI experience.

---

### 5. `<search-bar></search-bar>`
A customizable search bar that filters content on your page based on types or text. It supports searching by multiple types or all content.

#### Attributes:
- `type`: A comma-separated list of types to filter by (e.g., `type="song,movie"`). If omitted, it will search through all elements.

#### Usage:
To filter items, add the attribute `data-type` to the elements you want to make searchable.

#### Example:
```html
<!-- Search Bar to filter by "song" and "movie" -->
<search-bar type="song,movie"></search-bar>

<!-- Items to search -->
<div data-type="song">Song: Imagine - John Lennon</div>
<div data-type="movie">Movie: Inception</div>
<div data-type="book">Book: The Hobbit</div>
```

#### Example without filtering (search all):
```html
<search-bar></search-bar>

<div data-type="song">Song: Bohemian Rhapsody</div>
<div data-type="movie">Movie: The Matrix</div>
<div data-type="book">Book: Lord of the Rings</div>
```

#### Styling:
The search bar is styled by default but can be customized using CSS.

---

### Contributing

Feel free to contribute to this repository by submitting pull requests or issues.
