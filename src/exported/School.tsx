import IconSchoolFill0Wght100Grad0Opsz48 from '../components/SchoolFill0Wght100Grad0Opsz48'
import IconSchoolFill0Wght200Grad0Opsz48 from '../components/SchoolFill0Wght200Grad0Opsz48'
import IconSchoolFill0Wght300Grad0Opsz48 from '../components/SchoolFill0Wght300Grad0Opsz48'
import IconSchoolFill0Wght400Grad0Opsz48 from '../components/SchoolFill0Wght400Grad0Opsz48'
import IconSchoolFill0Wght500Grad0Opsz48 from '../components/SchoolFill0Wght500Grad0Opsz48'
import IconSchoolFill0Wght600Grad0Opsz48 from '../components/SchoolFill0Wght600Grad0Opsz48'
import IconSchoolFill0Wght700Grad0Opsz48 from '../components/SchoolFill0Wght700Grad0Opsz48'
import IconSchoolFill1Wght100Grad0Opsz48 from '../components/SchoolFill1Wght100Grad0Opsz48'
import IconSchoolFill1Wght200Grad0Opsz48 from '../components/SchoolFill1Wght200Grad0Opsz48'
import IconSchoolFill1Wght300Grad0Opsz48 from '../components/SchoolFill1Wght300Grad0Opsz48'
import IconSchoolFill1Wght400Grad0Opsz48 from '../components/SchoolFill1Wght400Grad0Opsz48'
import IconSchoolFill1Wght500Grad0Opsz48 from '../components/SchoolFill1Wght500Grad0Opsz48'
import IconSchoolFill1Wght600Grad0Opsz48 from '../components/SchoolFill1Wght600Grad0Opsz48'
import IconSchoolFill1Wght700Grad0Opsz48 from '../components/SchoolFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSchool = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSchoolFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSchoolFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSchoolFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSchoolFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSchoolFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSchoolFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSchoolFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSchoolFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSchoolFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSchoolFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSchoolFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSchoolFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSchoolFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSchoolFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
