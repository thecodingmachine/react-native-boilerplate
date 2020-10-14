---
slug: /Theme
title: Theme
---

The Theme folder is located at the root of your project. It includes a nice kit for building and maintain the UI of your application.
It will help you with variables and reusable stylesheets to build a well harmony between your screens.

## Variables
The first file is the variables one. You will find 3 groups of variables in it:
 - 🎨 **Colors**: which defines global colors of your graphical charter,
 ```javascript
     export const Colors = {
       transparent: 'rgba(0,0,0,0)',
       primary: '#007bff',
       white: '#ffffff',
       text: '#212529',
       success: '#28a745',
       error: '#dc3545',
     }
 ```

 - 🔠 **FontSize**: which defines different sizes for your text guidelines. These variables will be used in the file [Font](#font-) to create small texts, paragraphs and titles for example.
 ```javascript
     export const FontSize = {
       small: 12,
       regular: 14,
       large: 18,
     }
 ```

 - ✂️ **MetricsSizes**: which defines metrics sizes of your guidelines. They will be used by some files like [Gutters](#gutters-%EF%B8%8F) to create generic spaces for all your application,
 ```javascript
     const tiny = 5 // 10
     const small = tiny * 2 // 10
     const regular = tiny * 3 // 15
     const large = regular * 2 // 30
     export const MetricsSizes = {
         tiny,
         small,
         regular,
         large,
     }
 ```


:::note
In all these groups you can add, remove or edit variables with the values you want
:::

## Common
The `Common` file is here to define global style for the components of the application in order to keep the style at one place and avoid stylesheets every where in the code.
For example you can defines style for buttons, inputs, background like this :
```javascript
    export default StyleSheet.create({
      button: {
        backgroundColor: Colors.primary,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
    })
```

## Font 🔤
`Font` is a helper file based on [FontSize](#variables) variables to preset some text's stylesheets classes.
It provides these default stylesheets classes:

### textSmall
Used to create small text like note or information.
It will apply a `fontSize: FontSize.small` on the element.
<div align="center">
    <img src={require('../assets/Theme/Text/textSmall.png').default} />
</div>

### textRegular
Used to create regular text like paragraph.
It will apply a `fontSize: FontSize.regular` on the element.
<div align="center">
    <img src={require('../assets/Theme/Text/textRegular.png').default} />
</div>

### textLarge
Used to create subtitle text or highlighting.
It will apply a `fontSize: FontSize.large` on the element.
<div align="center">
    <img src={require('../assets/Theme/Text/textLarge.png').default} />
</div>

### titleSmall
Used to create small title text.
It will apply a `fontSize: FontSize.small * 2` and `fontWeight: 'bold'` on the element.
<div align="center">
    <img src={require('../assets/Theme/Text/titleSmall.png').default} />
</div>

### titleRegular
Used to create regular title text.
It will apply a `fontSize: FontSize.regular * 2` and `fontWeight: 'bold'` on the element.
<div align="center">
    <img src={require('../assets/Theme/Text/titleRegular.png').default} />
</div>

### titleLarge
Used to create big title text.
It will apply a `fontSize: FontSize.large * 2` and `fontWeight: 'bold'` on the element.
<div align="center">
    <img src={require('../assets/Theme/Text/titleLarge.png').default} />
</div>

### textCenter
Used in order to center a text horizontally.
<div align="center">
    <img src={require('../assets/Theme/Text/textCenter.png').default} />
</div>

### textJustify
Used in order to make a paragraph justified.
<div align="center">
    <img src={require('../assets/Theme/Text/textJustify.png').default} />
</div>

### textLeft
Used in order to make the text align on the left side of his parent.
<div align="center">
    <img src={require('../assets/Theme/Text/textLeft.png').default} />
</div>

### textRight
Used in order to make the text align on the right side of his parent.
<div align="center">
    <img src={require('../assets/Theme/Text/textRight.png').default} />
</div>

## Gutters ✂️
Gutters is a stylsheet's classes generator. It will help to build from [MetricsSizes](#variables) variables all necessary gutters.
It will generate, for each MetricsSize variables, classes like this :
```
    [size][direction][op]: {
        [op][direction]: [value]
    }
```

Where :
 * `[size]`: is the key of the variable included in MetricsSizes ('small' for example)
 * `[direction]`: can be ['Bottom','Top','Right','Left','Horizontal','Vertical']
 * `[op]`: can be ['Margin', 'Padding']
 * `[value]`: is the value of the [size]

For example, for the metricsSize `small`, the `Gutters` file will provides these classes :
```
smallBottomMargin, smallTopMargin, smallRightMargin, smallLeftMargin, smallVerticalMargin, smallHorizontalMargin
```
and
```
smallBottomPadding, smallTopPadding, smallRightPadding, smallLeftPadding, smallVerticalPadding, smallHorizontalPadding
```

## Images 🖼
This files is the entry point of all images used in the application
To use it, you only have to import the image like below

```javascript
    export default {
      logo: require('@/Assets/Images/TOM.png'),
    }
```

Then you can use your image like this :

```javascript
import { Images } from '@/Theme'
...
<Image source={Images.logo} />
```

## Layout
The `Layout` file will give you basic stylesheets classes to create layout and align elements.

### Column layout ⬇️
All stylesheet classes below help building a Column layout

#### column
Apply a top to bottom direction's column to an element. So all direct children will be stacked as following:
<div align="center">
    <img src={require('../assets/Theme/Layout/Column/C1.png').default} />
</div>

#### columnReverse
Apply a bottom to top direction's column to an element. So all direct children will be stacked as following:
<div align="center">
    <img src={require('../assets/Theme/Layout/Column/C2.png').default} />
</div>

#### colCenter
Apply a top to bottom direction's column and center all direct children as following:
<div align="center">
    <img src={require('../assets/Theme/Layout/Column/C3.png').default} />
</div>

#### colVCenter
Apply a top to bottom direction's column and center vertically all direct children as following:
<div align="center">
    <img src={require('../assets/Theme/Layout/Column/C5.png').default} />
</div>

#### colHCenter
Apply a top to bottom direction's column and center horizontally all direct children as following:
<div align="center">
    <img src={require('../assets/Theme/Layout/Column/C4.png').default} />
</div>

### Row layout ➡️
All stylesheet classes below help building a Row layout

#### row
Apply the row direction to an element left to right. So all direct children will be stacked as following:
<div align="center">
    <img src={require('../assets/Theme/Layout/Row/R1.png').default} />
</div>

#### rowReverse
Apply the column direction to an element right to left. So all direct children will be stacked as following:
<div align="center">
    <img src={require('../assets/Theme/Layout/Row/R2.png').default} />
</div>

#### rowCenter
Apply the column direction to an element left to right. So all direct children will be stacked as following:
<div align="center">
    <img src={require('../assets/Theme/Layout/Row/R3.png').default} />
</div>

#### rowVCenter
Apply the column direction to an element left to right. So all direct children will be stacked as following:
<div align="center">
    <img src={require('../assets/Theme/Layout/Row/R5.png').default} />
</div>

#### rowHCenter
Apply the column direction to an element left to right. So all direct children will be stacked as following:
<div align="center">
    <img src={require('../assets/Theme/Layout/Row/R4.png').default} />
</div>

### Default layout 🃏
#### center
center horizontally and vertically an element

#### alignItemsCenter
Align children of a container in the center of the container's cross axis.

#### alignItemsStart
Align children of a container to the start of the container's cross axis.

#### alignItemsStretch
Stretch children of a container to match the height of the container's cross axis.

#### justifyContentCenter
Align children of a container in the center of the container's main axis.

#### justifyContentAround
Evenly space off children across the container's main axis, distributing the remaining space around the children. Compared to space-between, using space-around will result in space being distributed to the beginning of the first child and end of the last child.

#### justifyContentBetween
Evenly space off children across the container's main axis, distributing the remaining space between the children.

#### scrollSpaceAround
make a space around on scroll view

#### scrollSpaceBetween
make a space between on scroll view

#### selfStretch
same has alignItemsStretch but it afect the children directly

### Size layout 📏
#### fill
Apply a `flex: 1`

#### fullSize
Make an element fit his height and width's parent

#### fullWidth
make the element fit his width's parent

#### fullHeight
make the element fit his height's parent

### Operation layout 🧮
#### mirror
make an element flip around the X axis

#### rotate90
rotate an element by 90° clockwise

#### rotate90Inverse
rotate an element by 90° counterclockwise