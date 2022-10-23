import IconGppBadFill0Wght100Grad0Opsz48 from '../components/GppBadFill0Wght100Grad0Opsz48'
import IconGppBadFill0Wght200Grad0Opsz48 from '../components/GppBadFill0Wght200Grad0Opsz48'
import IconGppBadFill0Wght300Grad0Opsz48 from '../components/GppBadFill0Wght300Grad0Opsz48'
import IconGppBadFill0Wght400Grad0Opsz48 from '../components/GppBadFill0Wght400Grad0Opsz48'
import IconGppBadFill0Wght500Grad0Opsz48 from '../components/GppBadFill0Wght500Grad0Opsz48'
import IconGppBadFill0Wght600Grad0Opsz48 from '../components/GppBadFill0Wght600Grad0Opsz48'
import IconGppBadFill0Wght700Grad0Opsz48 from '../components/GppBadFill0Wght700Grad0Opsz48'
import IconGppBadFill1Wght100Grad0Opsz48 from '../components/GppBadFill1Wght100Grad0Opsz48'
import IconGppBadFill1Wght200Grad0Opsz48 from '../components/GppBadFill1Wght200Grad0Opsz48'
import IconGppBadFill1Wght300Grad0Opsz48 from '../components/GppBadFill1Wght300Grad0Opsz48'
import IconGppBadFill1Wght400Grad0Opsz48 from '../components/GppBadFill1Wght400Grad0Opsz48'
import IconGppBadFill1Wght500Grad0Opsz48 from '../components/GppBadFill1Wght500Grad0Opsz48'
import IconGppBadFill1Wght600Grad0Opsz48 from '../components/GppBadFill1Wght600Grad0Opsz48'
import IconGppBadFill1Wght700Grad0Opsz48 from '../components/GppBadFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGppBad = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGppBadFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGppBadFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGppBadFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGppBadFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGppBadFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGppBadFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGppBadFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGppBadFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGppBadFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGppBadFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGppBadFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGppBadFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGppBadFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGppBadFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
