<p align="center">
<img src="https://meetalva.github.io/media/alva.svg" width="300">
</p>

# Meet Alva

> Alva is a radically new digital design tool built for cross-functional product teams.
>
> https://meetalva.io


Alva works with your production frontend components, adding up-to-date, responsive, and interactive designs to your living styleguide.

You can start with a minimal set of components to sketch concepts and do fast iterations with your development team to create and enrich components, from atoms to modules and entire pages and a full-featured styleguide. But you can also add Alva designs to existing style
guides.

Alva focuses on the arrangement and content editing of pages, while it leaves the implementation of the components to the developers, providing a single source of truth for both.

There is no such thing as out-dated and static PNG screens, as the current version of both the design models and the component implementation always render to up-to-date web pages instead.

## Installation

> For the full list of all releases, see [Github](https://github.com/meetalva/alva/releases)

* Visit https://meetalva.io/
* Scroll to **Download Alva** and click on it
* Wait for the download to complete
* Double click the downloded file
* Follow the instructions to install Alva

## Usage

### Getting Started with Alva

> 👩‍🎓 **Audience**: Everyone

* Follow the [installation instructions](#installation)
* Start Alva
* Click "Create A New Alva File"
* Drag some elements from the pattern pane (bottom left) to the element pane (top left).
* Download the [example file from meetalva.io](https://meetalva.io/Example.alva)
* Open it by hitting `Cmd+O`, then select the downloaded `Example.alva`
* Notice how the the pattern pane has new entries? That is a production-level pattern library embedded in `Example.alva`!


### Connect a Pattern Library to your Project

> 👩‍🎓 **Audience**: Everyone

* Start Alva
* Click "Create A New Alva File"
* Click the "Connect" button (top right)
* Select a directory that contains a [compatible pattern library](#pattern-library-requirements)
* Alva adds all found components to the pattern list (bottom left)

> :information_source: Alva currently supports a limited set of pattern libraries. See [Pattern Library Requirements](#pattern-library-requirements) for details. 
>
> Consult with your team members if your library fulfills the requirements.
>
> Use the [Alva DesignKit](git@github.com:meetalva/designkit.git) if you don't access to a compatible pattern library.


## Pattern Library Requirements

> See [Alva DesignKit](https://github.com/meetalva/designkit) for a compatible project setup

* **Language**: TypeScript
* **View Library**: React
* Must be a valid NPM package exporting components via a central entry point

> :information_source: We plan to support more technologies and setups in the future.


## Pattern Requirements

* **Language**: TypeScript
* **View Library**: React

* Must be reachable from the central package entry point
* Must be exported via `export`
* Must by typed as `React.SFC`, `React.ComponentClass`, `React.PureComponent`, `React.StatelessComponent`, `React.SFC`, `React.ComponentType`
* Must be built with `declarations`, so a `index.d.ts` is available
* In order to accept children elements in Alva, the `children` prop has to be typed explicitly

* Supported property types are
  * string
  * number
  * boolean
  * enum

## Pattern Meta Data

### Pattern

### Pattern Property

* **name**: TSDoc `@name [name]` - Used in the property pane as input label
* **default**: TSDoc `@default [value]` - Preset value for this property when creating new elements
* **description**: TSDoc `@description [description]` - Used as help text in property pane
* **example**: TSDoc `@example [value]` - Example used as input placeholder if applicable
* **ignore**: TSDoc `@ignore` - Do not show this property
* **slot**: TSDoc `@slot` - Force alva to consider the property as Slot
* **href**: TSDoc `@href` - Force alva to consider the property as href 

---

Feel free to dive in! Open an [issue](https://github.com/meetalva/alva/issues/new), submit a
[Pull Request](https://github.com/meetalva/alva/compare) or let’s discuss what should be next. ❤️

Alva follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md).

---

Proudly powered by [SinnerSchrader](https://github.com/sinnerschrader).

Copyright 2017-2018. Released under the MIT license.
