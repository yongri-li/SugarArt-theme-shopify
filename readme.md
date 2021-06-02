# Riess Group - Shopify Repository Template. 

This template works as a base to start new Shopify themes. 

## How to use

1. Create a new repository using this template. 
2. copy the `config.sample.yml` file to `config.yml`
3. Fill the required data in `config.yml`
4. run `theme download` to get the theme from Shopify. 
5. Push all changes to the repository. 

## Tools

To be defined. 

## Template Structure

### `theme/` directory

It contains the Shopify theme tracked in the repository. 

> At this time, we are not using a build process on liquid files to have more flexibility when pulling existing stores. We might create a workflow for themes from scratch, though these are just a few, and it might not make enough sense. 

### `src/` directory

It is used to host subdirectories for `scss` and `js` files or any other files that require some build process. These assets should be built into the theme using a tool like Webpack or Laravel Mix. 

### `docs/` directory

This directory contains documentation for this project. We don't store docs at the repository wiki because we want to keep track of documents in the same repository. You can reference documents within this directory from the main `readme.md` file.

> Please keep all documents here in markdown, so they're readable in Github. You can also add images to the same directory if you need or create subdirectories for that purpose. 

### `.github` directory

This directory contains everything required to fire a deployment to a Shopify Store using Github Actions. Please see [this document](docs/using-github-actions.md) for more information. 