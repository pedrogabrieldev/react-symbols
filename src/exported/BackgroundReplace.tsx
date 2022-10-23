import IconBackgroundReplaceFill0Wght100Grad0Opsz48 from '../components/BackgroundReplaceFill0Wght100Grad0Opsz48'
import IconBackgroundReplaceFill0Wght200Grad0Opsz48 from '../components/BackgroundReplaceFill0Wght200Grad0Opsz48'
import IconBackgroundReplaceFill0Wght300Grad0Opsz48 from '../components/BackgroundReplaceFill0Wght300Grad0Opsz48'
import IconBackgroundReplaceFill0Wght400Grad0Opsz48 from '../components/BackgroundReplaceFill0Wght400Grad0Opsz48'
import IconBackgroundReplaceFill0Wght500Grad0Opsz48 from '../components/BackgroundReplaceFill0Wght500Grad0Opsz48'
import IconBackgroundReplaceFill0Wght600Grad0Opsz48 from '../components/BackgroundReplaceFill0Wght600Grad0Opsz48'
import IconBackgroundReplaceFill0Wght700Grad0Opsz48 from '../components/BackgroundReplaceFill0Wght700Grad0Opsz48'
import IconBackgroundReplaceFill1Wght100Grad0Opsz48 from '../components/BackgroundReplaceFill1Wght100Grad0Opsz48'
import IconBackgroundReplaceFill1Wght200Grad0Opsz48 from '../components/BackgroundReplaceFill1Wght200Grad0Opsz48'
import IconBackgroundReplaceFill1Wght300Grad0Opsz48 from '../components/BackgroundReplaceFill1Wght300Grad0Opsz48'
import IconBackgroundReplaceFill1Wght400Grad0Opsz48 from '../components/BackgroundReplaceFill1Wght400Grad0Opsz48'
import IconBackgroundReplaceFill1Wght500Grad0Opsz48 from '../components/BackgroundReplaceFill1Wght500Grad0Opsz48'
import IconBackgroundReplaceFill1Wght600Grad0Opsz48 from '../components/BackgroundReplaceFill1Wght600Grad0Opsz48'
import IconBackgroundReplaceFill1Wght700Grad0Opsz48 from '../components/BackgroundReplaceFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBackgroundReplace = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBackgroundReplaceFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBackgroundReplaceFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBackgroundReplaceFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBackgroundReplaceFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBackgroundReplaceFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBackgroundReplaceFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBackgroundReplaceFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBackgroundReplaceFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBackgroundReplaceFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBackgroundReplaceFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBackgroundReplaceFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBackgroundReplaceFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBackgroundReplaceFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBackgroundReplaceFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
