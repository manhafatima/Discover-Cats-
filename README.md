# WEB102 Project 2 - *Flashcards*

## Overview

A React web app that lets users discover random cat breeds using The Cat API.

---

## 🎯 Features

### ✅ Required Features

- [x] Application features a 'Discover' or similarly named button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data
  - [x] Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data
  - [x] The type of attribute displayed for each image should be consistent across API calls (i.e. if they are using a cat API, and display the color, breed, and age in response to an initial API call, subsequent button clicks should also result in the color, breed, and age being displayed)

- [x] Only one item/API call is viewable at a time and at least one image is displayed per API call
  - [x] A single result of an API call is displayed at a time
  - [x] Displayed attributes should match the displayed image (i.e., if showing a picture of a Siamese cat and the attribute breed, the displayed breed should be 'Siamese' not 'Ragdoll' or another breed that doesn't match)
  - [x] There is at least one image per API call

- [x] API call response results should appear random to the user
  
- [x] Clicking on a displayed value for one attribute adds it to a displayed ban list
  - [x] At least one attribute for each API result should be clickable
  - [x] Clicking on a clickable attribute not on the ban list, should immediately add it to the ban list
  - [x] Clicking on an attribute in the ban list should immediately remove it from the ban list
      
- [x] Attributes on the ban list prevent further images/API results with that attribute from being displayed



## 📸 GIF Walkthrough

[App Walkthrough](https://canva.link/rbwa6a4yu91dp5z)
