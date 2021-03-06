/// <reference types="cypress" />
import {createVisualTests} from '../../support/utils/visualTesting';

describe('Avatar visual tests', () => {

  const pageId = 'icons-avatar--default';
  const stories = ["story--icons-avatar--story-avatar-variants",
  "story--icons-avatar--story-avatar-sizes",
  "story--icons-avatar--default-story"];

  // Example how to skip testing for some user stories
  const skipedStories = [];

  before(() => {
    cy.visitStorybookIframe(pageId);
    cy.verifyAllStoriesHaveVRT(stories, skipedStories);
  });

  createVisualTests(stories, skipedStories)
});
