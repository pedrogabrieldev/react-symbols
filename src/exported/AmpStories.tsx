import IconAmpStoriesFill0Wght100Grad0Opsz48 from '../components/AmpStoriesFill0Wght100Grad0Opsz48'
import IconAmpStoriesFill0Wght200Grad0Opsz48 from '../components/AmpStoriesFill0Wght200Grad0Opsz48'
import IconAmpStoriesFill0Wght300Grad0Opsz48 from '../components/AmpStoriesFill0Wght300Grad0Opsz48'
import IconAmpStoriesFill0Wght400Grad0Opsz48 from '../components/AmpStoriesFill0Wght400Grad0Opsz48'
import IconAmpStoriesFill0Wght500Grad0Opsz48 from '../components/AmpStoriesFill0Wght500Grad0Opsz48'
import IconAmpStoriesFill0Wght600Grad0Opsz48 from '../components/AmpStoriesFill0Wght600Grad0Opsz48'
import IconAmpStoriesFill0Wght700Grad0Opsz48 from '../components/AmpStoriesFill0Wght700Grad0Opsz48'
import IconAmpStoriesFill1Wght100Grad0Opsz48 from '../components/AmpStoriesFill1Wght100Grad0Opsz48'
import IconAmpStoriesFill1Wght200Grad0Opsz48 from '../components/AmpStoriesFill1Wght200Grad0Opsz48'
import IconAmpStoriesFill1Wght300Grad0Opsz48 from '../components/AmpStoriesFill1Wght300Grad0Opsz48'
import IconAmpStoriesFill1Wght400Grad0Opsz48 from '../components/AmpStoriesFill1Wght400Grad0Opsz48'
import IconAmpStoriesFill1Wght500Grad0Opsz48 from '../components/AmpStoriesFill1Wght500Grad0Opsz48'
import IconAmpStoriesFill1Wght600Grad0Opsz48 from '../components/AmpStoriesFill1Wght600Grad0Opsz48'
import IconAmpStoriesFill1Wght700Grad0Opsz48 from '../components/AmpStoriesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAmpStories = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAmpStoriesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAmpStoriesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAmpStoriesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAmpStoriesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAmpStoriesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAmpStoriesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAmpStoriesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAmpStoriesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAmpStoriesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAmpStoriesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAmpStoriesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAmpStoriesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAmpStoriesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAmpStoriesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
