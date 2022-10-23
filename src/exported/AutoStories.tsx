import IconAutoStoriesFill0Wght100Grad0Opsz48 from '../components/AutoStoriesFill0Wght100Grad0Opsz48'
import IconAutoStoriesFill0Wght200Grad0Opsz48 from '../components/AutoStoriesFill0Wght200Grad0Opsz48'
import IconAutoStoriesFill0Wght300Grad0Opsz48 from '../components/AutoStoriesFill0Wght300Grad0Opsz48'
import IconAutoStoriesFill0Wght400Grad0Opsz48 from '../components/AutoStoriesFill0Wght400Grad0Opsz48'
import IconAutoStoriesFill0Wght500Grad0Opsz48 from '../components/AutoStoriesFill0Wght500Grad0Opsz48'
import IconAutoStoriesFill0Wght600Grad0Opsz48 from '../components/AutoStoriesFill0Wght600Grad0Opsz48'
import IconAutoStoriesFill0Wght700Grad0Opsz48 from '../components/AutoStoriesFill0Wght700Grad0Opsz48'
import IconAutoStoriesFill1Wght100Grad0Opsz48 from '../components/AutoStoriesFill1Wght100Grad0Opsz48'
import IconAutoStoriesFill1Wght200Grad0Opsz48 from '../components/AutoStoriesFill1Wght200Grad0Opsz48'
import IconAutoStoriesFill1Wght300Grad0Opsz48 from '../components/AutoStoriesFill1Wght300Grad0Opsz48'
import IconAutoStoriesFill1Wght400Grad0Opsz48 from '../components/AutoStoriesFill1Wght400Grad0Opsz48'
import IconAutoStoriesFill1Wght500Grad0Opsz48 from '../components/AutoStoriesFill1Wght500Grad0Opsz48'
import IconAutoStoriesFill1Wght600Grad0Opsz48 from '../components/AutoStoriesFill1Wght600Grad0Opsz48'
import IconAutoStoriesFill1Wght700Grad0Opsz48 from '../components/AutoStoriesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAutoStories = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAutoStoriesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAutoStoriesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAutoStoriesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAutoStoriesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAutoStoriesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAutoStoriesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAutoStoriesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAutoStoriesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAutoStoriesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAutoStoriesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAutoStoriesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAutoStoriesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAutoStoriesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAutoStoriesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
