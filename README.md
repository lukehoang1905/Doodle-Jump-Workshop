"# Doodle-Jump-Workshop" 
---
title: 'Doodle Jump'
disqus: 'luke'
---

Doodle Jump with JavaScript
===

## Table of Contents

[TOC]

## Beginners Guide

If you are a total beginner to JavaScript and programing, it is reccomended for you to follow the instructions rather than understand every syntax. 

1. Follow the instructions.
2. Accept that we may not fully understand weird stuff
3. Review, Research and Refactor.
4. Let's have some fun jumping into this project.

Main game flow
---

```gherkin=
Feature: Simple flow of the game
  
  Scenario: User starts a game
    When the User starts a game
    Then the User see a number of platforms moving down perpeptually
    
  Scenario: User control Character
    Given the Character in the middle of the screen
    When the User press left of right key
    Then the User see the character move left or right
    
  Scenario: Character jumping
    Given the Character right-on-top of a platform
    When the first touch the platform
    Then the User see the character moving up 
    And after sometime moving up
    Then the character started falling down
    
  Scenario: Character die
    Given Falling to the bottom of the screen
    When the character touch the screen
    Then the game over 
    And  everything stop
```

Game Loop
---
```sequence
Game Settings->Canvas: Use Settings to draw on Canvas
Some Events->Instructions: calculate
Instructions-->>Game Settings: Update and change
Game Settings-->>Canvas: use new Settings to draw on Canvas

```
## Preparing our resources
---

## Appendix and FAQ
:::info
**Find this document incomplete?** Leave a comment!
:::

###### tags: `JavaScript` `Doodlejump` `Game` 
