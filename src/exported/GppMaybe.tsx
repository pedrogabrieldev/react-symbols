import IconGppMaybeFill0Wght100Grad0Opsz48 from '../components/GppMaybeFill0Wght100Grad0Opsz48'
import IconGppMaybeFill0Wght200Grad0Opsz48 from '../components/GppMaybeFill0Wght200Grad0Opsz48'
import IconGppMaybeFill0Wght300Grad0Opsz48 from '../components/GppMaybeFill0Wght300Grad0Opsz48'
import IconGppMaybeFill0Wght400Grad0Opsz48 from '../components/GppMaybeFill0Wght400Grad0Opsz48'
import IconGppMaybeFill0Wght500Grad0Opsz48 from '../components/GppMaybeFill0Wght500Grad0Opsz48'
import IconGppMaybeFill0Wght600Grad0Opsz48 from '../components/GppMaybeFill0Wght600Grad0Opsz48'
import IconGppMaybeFill0Wght700Grad0Opsz48 from '../components/GppMaybeFill0Wght700Grad0Opsz48'
import IconGppMaybeFill1Wght100Grad0Opsz48 from '../components/GppMaybeFill1Wght100Grad0Opsz48'
import IconGppMaybeFill1Wght200Grad0Opsz48 from '../components/GppMaybeFill1Wght200Grad0Opsz48'
import IconGppMaybeFill1Wght300Grad0Opsz48 from '../components/GppMaybeFill1Wght300Grad0Opsz48'
import IconGppMaybeFill1Wght400Grad0Opsz48 from '../components/GppMaybeFill1Wght400Grad0Opsz48'
import IconGppMaybeFill1Wght500Grad0Opsz48 from '../components/GppMaybeFill1Wght500Grad0Opsz48'
import IconGppMaybeFill1Wght600Grad0Opsz48 from '../components/GppMaybeFill1Wght600Grad0Opsz48'
import IconGppMaybeFill1Wght700Grad0Opsz48 from '../components/GppMaybeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGppMaybe = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGppMaybeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGppMaybeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGppMaybeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGppMaybeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGppMaybeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGppMaybeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGppMaybeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGppMaybeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGppMaybeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGppMaybeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGppMaybeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGppMaybeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGppMaybeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGppMaybeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
