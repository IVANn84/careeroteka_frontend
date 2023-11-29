import React from 'react';

import { useStoreSurveyPage } from 'Page/Survey/stores';

import Skill from './components/Skill';
import BlocksSkeleton from './components/BlocksSkeleton';

export default function SkillList({
  classes,
}) {
  const {
    stepsStore,
    skillsStore,
  } = useStoreSurveyPage();

  return (
    <div className={classes.container}>
      {!!stepsStore.stepsData[3].length && stepsStore.stepsData[3].map(skill => (
        <Skill
          key={skill.id}
          removeSkill={() => stepsStore.selectSkill(skill)}
          skillName={skill.name}
        />
      ))}
      <BlocksSkeleton isDisplayed={skillsStore.isLoading}>
        {skillsStore.filteredSkills.map(({ id, name }) => (
          <Skill
            key={id}
            onSelect={() => stepsStore.selectSkill({ id, name })}
            skillName={name}
          />
        ))}
      </BlocksSkeleton>
    </div>
  );
}
