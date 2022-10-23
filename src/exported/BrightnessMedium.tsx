import IconBrightnessMediumFill0Wght100Grad0Opsz48 from '../components/BrightnessMediumFill0Wght100Grad0Opsz48'
import IconBrightnessMediumFill0Wght200Grad0Opsz48 from '../components/BrightnessMediumFill0Wght200Grad0Opsz48'
import IconBrightnessMediumFill0Wght300Grad0Opsz48 from '../components/BrightnessMediumFill0Wght300Grad0Opsz48'
import IconBrightnessMediumFill0Wght400Grad0Opsz48 from '../components/BrightnessMediumFill0Wght400Grad0Opsz48'
import IconBrightnessMediumFill0Wght500Grad0Opsz48 from '../components/BrightnessMediumFill0Wght500Grad0Opsz48'
import IconBrightnessMediumFill0Wght600Grad0Opsz48 from '../components/BrightnessMediumFill0Wght600Grad0Opsz48'
import IconBrightnessMediumFill0Wght700Grad0Opsz48 from '../components/BrightnessMediumFill0Wght700Grad0Opsz48'
import IconBrightnessMediumFill1Wght100Grad0Opsz48 from '../components/BrightnessMediumFill1Wght100Grad0Opsz48'
import IconBrightnessMediumFill1Wght200Grad0Opsz48 from '../components/BrightnessMediumFill1Wght200Grad0Opsz48'
import IconBrightnessMediumFill1Wght300Grad0Opsz48 from '../components/BrightnessMediumFill1Wght300Grad0Opsz48'
import IconBrightnessMediumFill1Wght400Grad0Opsz48 from '../components/BrightnessMediumFill1Wght400Grad0Opsz48'
import IconBrightnessMediumFill1Wght500Grad0Opsz48 from '../components/BrightnessMediumFill1Wght500Grad0Opsz48'
import IconBrightnessMediumFill1Wght600Grad0Opsz48 from '../components/BrightnessMediumFill1Wght600Grad0Opsz48'
import IconBrightnessMediumFill1Wght700Grad0Opsz48 from '../components/BrightnessMediumFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBrightnessMedium = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBrightnessMediumFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBrightnessMediumFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBrightnessMediumFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBrightnessMediumFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBrightnessMediumFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBrightnessMediumFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBrightnessMediumFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBrightnessMediumFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBrightnessMediumFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBrightnessMediumFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBrightnessMediumFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBrightnessMediumFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBrightnessMediumFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBrightnessMediumFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
