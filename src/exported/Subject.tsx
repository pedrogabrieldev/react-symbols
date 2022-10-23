import IconSubjectFill0Wght100Grad0Opsz48 from '../components/SubjectFill0Wght100Grad0Opsz48'
import IconSubjectFill0Wght200Grad0Opsz48 from '../components/SubjectFill0Wght200Grad0Opsz48'
import IconSubjectFill0Wght300Grad0Opsz48 from '../components/SubjectFill0Wght300Grad0Opsz48'
import IconSubjectFill0Wght400Grad0Opsz48 from '../components/SubjectFill0Wght400Grad0Opsz48'
import IconSubjectFill0Wght500Grad0Opsz48 from '../components/SubjectFill0Wght500Grad0Opsz48'
import IconSubjectFill0Wght600Grad0Opsz48 from '../components/SubjectFill0Wght600Grad0Opsz48'
import IconSubjectFill0Wght700Grad0Opsz48 from '../components/SubjectFill0Wght700Grad0Opsz48'
import IconSubjectFill1Wght100Grad0Opsz48 from '../components/SubjectFill1Wght100Grad0Opsz48'
import IconSubjectFill1Wght200Grad0Opsz48 from '../components/SubjectFill1Wght200Grad0Opsz48'
import IconSubjectFill1Wght300Grad0Opsz48 from '../components/SubjectFill1Wght300Grad0Opsz48'
import IconSubjectFill1Wght400Grad0Opsz48 from '../components/SubjectFill1Wght400Grad0Opsz48'
import IconSubjectFill1Wght500Grad0Opsz48 from '../components/SubjectFill1Wght500Grad0Opsz48'
import IconSubjectFill1Wght600Grad0Opsz48 from '../components/SubjectFill1Wght600Grad0Opsz48'
import IconSubjectFill1Wght700Grad0Opsz48 from '../components/SubjectFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSubject = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSubjectFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSubjectFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSubjectFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSubjectFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSubjectFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSubjectFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSubjectFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSubjectFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSubjectFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSubjectFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSubjectFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSubjectFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSubjectFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSubjectFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
