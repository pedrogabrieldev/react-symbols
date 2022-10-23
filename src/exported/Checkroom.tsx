import IconCheckroomFill0Wght100Grad0Opsz48 from '../components/CheckroomFill0Wght100Grad0Opsz48'
import IconCheckroomFill0Wght200Grad0Opsz48 from '../components/CheckroomFill0Wght200Grad0Opsz48'
import IconCheckroomFill0Wght300Grad0Opsz48 from '../components/CheckroomFill0Wght300Grad0Opsz48'
import IconCheckroomFill0Wght400Grad0Opsz48 from '../components/CheckroomFill0Wght400Grad0Opsz48'
import IconCheckroomFill0Wght500Grad0Opsz48 from '../components/CheckroomFill0Wght500Grad0Opsz48'
import IconCheckroomFill0Wght600Grad0Opsz48 from '../components/CheckroomFill0Wght600Grad0Opsz48'
import IconCheckroomFill0Wght700Grad0Opsz48 from '../components/CheckroomFill0Wght700Grad0Opsz48'
import IconCheckroomFill1Wght100Grad0Opsz48 from '../components/CheckroomFill1Wght100Grad0Opsz48'
import IconCheckroomFill1Wght200Grad0Opsz48 from '../components/CheckroomFill1Wght200Grad0Opsz48'
import IconCheckroomFill1Wght300Grad0Opsz48 from '../components/CheckroomFill1Wght300Grad0Opsz48'
import IconCheckroomFill1Wght400Grad0Opsz48 from '../components/CheckroomFill1Wght400Grad0Opsz48'
import IconCheckroomFill1Wght500Grad0Opsz48 from '../components/CheckroomFill1Wght500Grad0Opsz48'
import IconCheckroomFill1Wght600Grad0Opsz48 from '../components/CheckroomFill1Wght600Grad0Opsz48'
import IconCheckroomFill1Wght700Grad0Opsz48 from '../components/CheckroomFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCheckroom = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCheckroomFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCheckroomFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCheckroomFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCheckroomFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCheckroomFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCheckroomFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCheckroomFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCheckroomFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCheckroomFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCheckroomFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCheckroomFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCheckroomFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCheckroomFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCheckroomFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
