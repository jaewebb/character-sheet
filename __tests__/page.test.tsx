import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '@/app/page'
 
test('Page', () => {
  render(<Page />)

  // Character Component
  expect(screen.getByRole('heading', { level: 1, name: 'Jae Webb' })).toBeDefined()
  expect(screen.getByRole('heading', { level: 2, name: 'Human Senior Web Application Developer' })).toBeDefined()
  expect(screen.getByRole('heading', { level: 3, name: 'Level 20' })).toBeDefined()
  expect(screen.getByAltText('Jae Webb')).toBeDefined()

  // Ability Score Component
  expect(screen.getByTestId('ability-score-Strength')).toBeDefined()
  expect(screen.getByTestId('ability-score-Strength-modifier')).toBeDefined()
  expect(screen.getByTestId('ability-score-Strength-base')).toBeDefined()
  expect(screen.getByTestId('ability-score-Dexterity')).toBeDefined()
  expect(screen.getByTestId('ability-score-Dexterity-modifier')).toBeDefined()
  expect(screen.getByTestId('ability-score-Dexterity-base')).toBeDefined()
  expect(screen.getByTestId('ability-score-Constitution')).toBeDefined()
  expect(screen.getByTestId('ability-score-Constitution-modifier')).toBeDefined()
  expect(screen.getByTestId('ability-score-Constitution-base')).toBeDefined()
  expect(screen.getByTestId('ability-score-Intelligence')).toBeDefined()
  expect(screen.getByTestId('ability-score-Intelligence-modifier')).toBeDefined()
  expect(screen.getByTestId('ability-score-Intelligence-base')).toBeDefined()
  expect(screen.getByTestId('ability-score-Wisdom')).toBeDefined()
  expect(screen.getByTestId('ability-score-Wisdom-modifier')).toBeDefined()
  expect(screen.getByTestId('ability-score-Wisdom-base')).toBeDefined()
  expect(screen.getByTestId('ability-score-Charisma')).toBeDefined()
  expect(screen.getByTestId('ability-score-Charisma-modifier')).toBeDefined()
  expect(screen.getByTestId('ability-score-Charisma-base')).toBeDefined()
  
  // Saving Throws Component
  expect(screen.getByRole('heading', { level: 4, name: 'Saving Throws' })).toBeDefined()
  expect(screen.getByTestId('saving-throw-STR')).toBeDefined()
  expect(screen.getByTestId('saving-throw-STR-base')).toBeDefined()
  expect(screen.getByTestId('saving-throw-DEX')).toBeDefined()
  expect(screen.getByTestId('saving-throw-DEX-base')).toBeDefined()
  expect(screen.getByTestId('saving-throw-CON')).toBeDefined()
  expect(screen.getByTestId('saving-throw-CON-base')).toBeDefined()
  expect(screen.getByTestId('saving-throw-INT')).toBeDefined()
  expect(screen.getByTestId('saving-throw-INT-base')).toBeDefined()
  expect(screen.getByTestId('saving-throw-WIS')).toBeDefined()
  expect(screen.getByTestId('saving-throw-WIS-base')).toBeDefined()
  expect(screen.getByTestId('saving-throw-CHA')).toBeDefined()
  expect(screen.getByTestId('saving-throw-CHA-base')).toBeDefined()
  
  // Senses Component
  expect(screen.getByRole('heading', { level: 4, name: 'Senses' })).toBeDefined()
  expect(screen.getByTestId('sense-Perception')).toBeDefined()
  expect(screen.getByTestId('sense-Perception-base')).toBeDefined()
  expect(screen.getByTestId('sense-Investigation')).toBeDefined()
  expect(screen.getByTestId('sense-Investigation-base')).toBeDefined()
  expect(screen.getByTestId('sense-Insight')).toBeDefined()
  expect(screen.getByTestId('sense-Insight-base')).toBeDefined()

  // Proficiencies and Training Component
  expect(screen.getByRole('heading', { level: 4, name: 'Proficiencies & Training' })).toBeDefined()
  expect(screen.getByRole('heading', { level: 5, name: 'Education' })).toBeDefined()
  expect(screen.getByRole('heading', { level: 5, name: 'Tools' })).toBeDefined()
  expect(screen.getByRole('heading', { level: 5, name: 'Languages' })).toBeDefined()

  // Skills Table
  expect(screen.getByRole('table')).toBeDefined()
  expect(screen.getByTestId('heading-prof')).toBeDefined()
  expect(screen.getByTestId('heading-skill')).toBeDefined()
  expect(screen.getByTestId('heading-bonus')).toBeDefined()

  // Character Tabs Component
  // Feats and Traits
  // expect(screen.getByRole('heading', { level: 5, name: 'Hockey Player' })).toBeDefined()
  // expect(screen.getByRole('heading', { level: 5, name: 'Gamer' })).toBeDefined()
  // expect(screen.getByRole('heading', { level: 5, name: 'Digital Artist' })).toBeDefined()
  // Background
  expect(screen.getByRole('heading', { level: 4, name: 'Work Experience' })).toBeDefined()
  expect(screen.getByRole('heading', { level: 5, name: 'Senior Web Application Developer' })).toBeDefined()
  expect(screen.getByRole('heading', { level: 5, name: 'Web Developer' })).toBeDefined()
  expect(screen.getByRole('heading', { level: 5, name: 'Programmer/Analyst' })).toBeDefined()
  expect(screen.getByRole('heading', { level: 5, name: 'Software Developer' })).toBeDefined()
  expect(screen.getByRole('heading', { level: 4, name: 'Education' })).toBeDefined()
  expect(screen.getByRole('heading', { level: 5, name: 'Computer Programmer/Analyst (co-op)' })).toBeDefined()
  expect(screen.getByRole('heading', { level: 5, name: 'Computer Science' })).toBeDefined()
})
