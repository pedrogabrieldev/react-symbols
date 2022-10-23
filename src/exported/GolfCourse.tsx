import IconGolfCourseFill0Wght100Grad0Opsz48 from '../components/GolfCourseFill0Wght100Grad0Opsz48'
import IconGolfCourseFill0Wght200Grad0Opsz48 from '../components/GolfCourseFill0Wght200Grad0Opsz48'
import IconGolfCourseFill0Wght300Grad0Opsz48 from '../components/GolfCourseFill0Wght300Grad0Opsz48'
import IconGolfCourseFill0Wght400Grad0Opsz48 from '../components/GolfCourseFill0Wght400Grad0Opsz48'
import IconGolfCourseFill0Wght500Grad0Opsz48 from '../components/GolfCourseFill0Wght500Grad0Opsz48'
import IconGolfCourseFill0Wght600Grad0Opsz48 from '../components/GolfCourseFill0Wght600Grad0Opsz48'
import IconGolfCourseFill0Wght700Grad0Opsz48 from '../components/GolfCourseFill0Wght700Grad0Opsz48'
import IconGolfCourseFill1Wght100Grad0Opsz48 from '../components/GolfCourseFill1Wght100Grad0Opsz48'
import IconGolfCourseFill1Wght200Grad0Opsz48 from '../components/GolfCourseFill1Wght200Grad0Opsz48'
import IconGolfCourseFill1Wght300Grad0Opsz48 from '../components/GolfCourseFill1Wght300Grad0Opsz48'
import IconGolfCourseFill1Wght400Grad0Opsz48 from '../components/GolfCourseFill1Wght400Grad0Opsz48'
import IconGolfCourseFill1Wght500Grad0Opsz48 from '../components/GolfCourseFill1Wght500Grad0Opsz48'
import IconGolfCourseFill1Wght600Grad0Opsz48 from '../components/GolfCourseFill1Wght600Grad0Opsz48'
import IconGolfCourseFill1Wght700Grad0Opsz48 from '../components/GolfCourseFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGolfCourse = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGolfCourseFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGolfCourseFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGolfCourseFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGolfCourseFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGolfCourseFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGolfCourseFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGolfCourseFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGolfCourseFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGolfCourseFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGolfCourseFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGolfCourseFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGolfCourseFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGolfCourseFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGolfCourseFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
