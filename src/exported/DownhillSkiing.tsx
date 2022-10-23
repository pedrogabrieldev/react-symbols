import IconDownhillSkiingFill0Wght100Grad0Opsz48 from '../components/DownhillSkiingFill0Wght100Grad0Opsz48'
import IconDownhillSkiingFill0Wght200Grad0Opsz48 from '../components/DownhillSkiingFill0Wght200Grad0Opsz48'
import IconDownhillSkiingFill0Wght300Grad0Opsz48 from '../components/DownhillSkiingFill0Wght300Grad0Opsz48'
import IconDownhillSkiingFill0Wght400Grad0Opsz48 from '../components/DownhillSkiingFill0Wght400Grad0Opsz48'
import IconDownhillSkiingFill0Wght500Grad0Opsz48 from '../components/DownhillSkiingFill0Wght500Grad0Opsz48'
import IconDownhillSkiingFill0Wght600Grad0Opsz48 from '../components/DownhillSkiingFill0Wght600Grad0Opsz48'
import IconDownhillSkiingFill0Wght700Grad0Opsz48 from '../components/DownhillSkiingFill0Wght700Grad0Opsz48'
import IconDownhillSkiingFill1Wght100Grad0Opsz48 from '../components/DownhillSkiingFill1Wght100Grad0Opsz48'
import IconDownhillSkiingFill1Wght200Grad0Opsz48 from '../components/DownhillSkiingFill1Wght200Grad0Opsz48'
import IconDownhillSkiingFill1Wght300Grad0Opsz48 from '../components/DownhillSkiingFill1Wght300Grad0Opsz48'
import IconDownhillSkiingFill1Wght400Grad0Opsz48 from '../components/DownhillSkiingFill1Wght400Grad0Opsz48'
import IconDownhillSkiingFill1Wght500Grad0Opsz48 from '../components/DownhillSkiingFill1Wght500Grad0Opsz48'
import IconDownhillSkiingFill1Wght600Grad0Opsz48 from '../components/DownhillSkiingFill1Wght600Grad0Opsz48'
import IconDownhillSkiingFill1Wght700Grad0Opsz48 from '../components/DownhillSkiingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDownhillSkiing = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDownhillSkiingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDownhillSkiingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDownhillSkiingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDownhillSkiingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDownhillSkiingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDownhillSkiingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDownhillSkiingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDownhillSkiingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDownhillSkiingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDownhillSkiingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDownhillSkiingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDownhillSkiingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDownhillSkiingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDownhillSkiingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
