import IconAutoAwesomeMosaicFill0Wght100Grad0Opsz48 from '../components/AutoAwesomeMosaicFill0Wght100Grad0Opsz48'
import IconAutoAwesomeMosaicFill0Wght200Grad0Opsz48 from '../components/AutoAwesomeMosaicFill0Wght200Grad0Opsz48'
import IconAutoAwesomeMosaicFill0Wght300Grad0Opsz48 from '../components/AutoAwesomeMosaicFill0Wght300Grad0Opsz48'
import IconAutoAwesomeMosaicFill0Wght400Grad0Opsz48 from '../components/AutoAwesomeMosaicFill0Wght400Grad0Opsz48'
import IconAutoAwesomeMosaicFill0Wght500Grad0Opsz48 from '../components/AutoAwesomeMosaicFill0Wght500Grad0Opsz48'
import IconAutoAwesomeMosaicFill0Wght600Grad0Opsz48 from '../components/AutoAwesomeMosaicFill0Wght600Grad0Opsz48'
import IconAutoAwesomeMosaicFill0Wght700Grad0Opsz48 from '../components/AutoAwesomeMosaicFill0Wght700Grad0Opsz48'
import IconAutoAwesomeMosaicFill1Wght100Grad0Opsz48 from '../components/AutoAwesomeMosaicFill1Wght100Grad0Opsz48'
import IconAutoAwesomeMosaicFill1Wght200Grad0Opsz48 from '../components/AutoAwesomeMosaicFill1Wght200Grad0Opsz48'
import IconAutoAwesomeMosaicFill1Wght300Grad0Opsz48 from '../components/AutoAwesomeMosaicFill1Wght300Grad0Opsz48'
import IconAutoAwesomeMosaicFill1Wght400Grad0Opsz48 from '../components/AutoAwesomeMosaicFill1Wght400Grad0Opsz48'
import IconAutoAwesomeMosaicFill1Wght500Grad0Opsz48 from '../components/AutoAwesomeMosaicFill1Wght500Grad0Opsz48'
import IconAutoAwesomeMosaicFill1Wght600Grad0Opsz48 from '../components/AutoAwesomeMosaicFill1Wght600Grad0Opsz48'
import IconAutoAwesomeMosaicFill1Wght700Grad0Opsz48 from '../components/AutoAwesomeMosaicFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAutoAwesomeMosaic = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAutoAwesomeMosaicFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAutoAwesomeMosaicFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAutoAwesomeMosaicFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAutoAwesomeMosaicFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAutoAwesomeMosaicFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAutoAwesomeMosaicFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAutoAwesomeMosaicFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAutoAwesomeMosaicFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAutoAwesomeMosaicFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAutoAwesomeMosaicFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAutoAwesomeMosaicFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAutoAwesomeMosaicFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAutoAwesomeMosaicFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAutoAwesomeMosaicFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
