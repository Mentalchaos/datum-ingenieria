export interface FeatureSectionProps {
  title: string
  description: string
  imageUrl: string
  buttonLabel?: string
  video?: boolean,
  border?: boolean
}

export interface GroupsFeaturesSectionProps {
  id?: string
  title: string
  description: string
  sections: {
    title: string
    description: string
    imageUrl: string
  }[]
}

export interface DefaultState {
  featureSections: FeatureSectionProps[]
  groupsFeaturesSection: GroupsFeaturesSectionProps
}
