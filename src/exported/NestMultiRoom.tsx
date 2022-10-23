import IconNestMultiRoomFill0Wght100Grad0Opsz48 from '../components/NestMultiRoomFill0Wght100Grad0Opsz48'
import IconNestMultiRoomFill0Wght200Grad0Opsz48 from '../components/NestMultiRoomFill0Wght200Grad0Opsz48'
import IconNestMultiRoomFill0Wght300Grad0Opsz48 from '../components/NestMultiRoomFill0Wght300Grad0Opsz48'
import IconNestMultiRoomFill0Wght400Grad0Opsz48 from '../components/NestMultiRoomFill0Wght400Grad0Opsz48'
import IconNestMultiRoomFill0Wght500Grad0Opsz48 from '../components/NestMultiRoomFill0Wght500Grad0Opsz48'
import IconNestMultiRoomFill0Wght600Grad0Opsz48 from '../components/NestMultiRoomFill0Wght600Grad0Opsz48'
import IconNestMultiRoomFill0Wght700Grad0Opsz48 from '../components/NestMultiRoomFill0Wght700Grad0Opsz48'
import IconNestMultiRoomFill1Wght100Grad0Opsz48 from '../components/NestMultiRoomFill1Wght100Grad0Opsz48'
import IconNestMultiRoomFill1Wght200Grad0Opsz48 from '../components/NestMultiRoomFill1Wght200Grad0Opsz48'
import IconNestMultiRoomFill1Wght300Grad0Opsz48 from '../components/NestMultiRoomFill1Wght300Grad0Opsz48'
import IconNestMultiRoomFill1Wght400Grad0Opsz48 from '../components/NestMultiRoomFill1Wght400Grad0Opsz48'
import IconNestMultiRoomFill1Wght500Grad0Opsz48 from '../components/NestMultiRoomFill1Wght500Grad0Opsz48'
import IconNestMultiRoomFill1Wght600Grad0Opsz48 from '../components/NestMultiRoomFill1Wght600Grad0Opsz48'
import IconNestMultiRoomFill1Wght700Grad0Opsz48 from '../components/NestMultiRoomFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestMultiRoom = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestMultiRoomFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestMultiRoomFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestMultiRoomFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestMultiRoomFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestMultiRoomFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestMultiRoomFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestMultiRoomFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestMultiRoomFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestMultiRoomFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestMultiRoomFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestMultiRoomFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestMultiRoomFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestMultiRoomFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestMultiRoomFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
