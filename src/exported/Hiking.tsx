import IconHikingFill0Wght100Grad0Opsz48 from '../components/HikingFill0Wght100Grad0Opsz48'
import IconHikingFill0Wght200Grad0Opsz48 from '../components/HikingFill0Wght200Grad0Opsz48'
import IconHikingFill0Wght300Grad0Opsz48 from '../components/HikingFill0Wght300Grad0Opsz48'
import IconHikingFill0Wght400Grad0Opsz48 from '../components/HikingFill0Wght400Grad0Opsz48'
import IconHikingFill0Wght500Grad0Opsz48 from '../components/HikingFill0Wght500Grad0Opsz48'
import IconHikingFill0Wght600Grad0Opsz48 from '../components/HikingFill0Wght600Grad0Opsz48'
import IconHikingFill0Wght700Grad0Opsz48 from '../components/HikingFill0Wght700Grad0Opsz48'
import IconHikingFill1Wght100Grad0Opsz48 from '../components/HikingFill1Wght100Grad0Opsz48'
import IconHikingFill1Wght200Grad0Opsz48 from '../components/HikingFill1Wght200Grad0Opsz48'
import IconHikingFill1Wght300Grad0Opsz48 from '../components/HikingFill1Wght300Grad0Opsz48'
import IconHikingFill1Wght400Grad0Opsz48 from '../components/HikingFill1Wght400Grad0Opsz48'
import IconHikingFill1Wght500Grad0Opsz48 from '../components/HikingFill1Wght500Grad0Opsz48'
import IconHikingFill1Wght600Grad0Opsz48 from '../components/HikingFill1Wght600Grad0Opsz48'
import IconHikingFill1Wght700Grad0Opsz48 from '../components/HikingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHiking = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHikingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHikingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHikingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHikingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHikingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHikingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHikingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHikingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHikingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHikingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHikingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHikingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHikingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHikingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
