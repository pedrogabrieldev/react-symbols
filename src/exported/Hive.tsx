import IconHiveFill0Wght100Grad0Opsz48 from '../components/HiveFill0Wght100Grad0Opsz48'
import IconHiveFill0Wght200Grad0Opsz48 from '../components/HiveFill0Wght200Grad0Opsz48'
import IconHiveFill0Wght300Grad0Opsz48 from '../components/HiveFill0Wght300Grad0Opsz48'
import IconHiveFill0Wght400Grad0Opsz48 from '../components/HiveFill0Wght400Grad0Opsz48'
import IconHiveFill0Wght500Grad0Opsz48 from '../components/HiveFill0Wght500Grad0Opsz48'
import IconHiveFill0Wght600Grad0Opsz48 from '../components/HiveFill0Wght600Grad0Opsz48'
import IconHiveFill0Wght700Grad0Opsz48 from '../components/HiveFill0Wght700Grad0Opsz48'
import IconHiveFill1Wght100Grad0Opsz48 from '../components/HiveFill1Wght100Grad0Opsz48'
import IconHiveFill1Wght200Grad0Opsz48 from '../components/HiveFill1Wght200Grad0Opsz48'
import IconHiveFill1Wght300Grad0Opsz48 from '../components/HiveFill1Wght300Grad0Opsz48'
import IconHiveFill1Wght400Grad0Opsz48 from '../components/HiveFill1Wght400Grad0Opsz48'
import IconHiveFill1Wght500Grad0Opsz48 from '../components/HiveFill1Wght500Grad0Opsz48'
import IconHiveFill1Wght600Grad0Opsz48 from '../components/HiveFill1Wght600Grad0Opsz48'
import IconHiveFill1Wght700Grad0Opsz48 from '../components/HiveFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHive = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHiveFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHiveFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHiveFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHiveFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHiveFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHiveFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHiveFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHiveFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHiveFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHiveFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHiveFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHiveFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHiveFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHiveFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
