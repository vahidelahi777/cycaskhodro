import ModelsShowcaseClient from './ModelsShowcaseClient'
import { OPEL_MODELS } from '@/content/models'

export default function ModelsShowcase() {
  return <ModelsShowcaseClient models={OPEL_MODELS} />
}
