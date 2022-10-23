import IconDesignServicesFill0Wght100Grad0Opsz48 from '../components/DesignServicesFill0Wght100Grad0Opsz48'
import IconDesignServicesFill0Wght200Grad0Opsz48 from '../components/DesignServicesFill0Wght200Grad0Opsz48'
import IconDesignServicesFill0Wght300Grad0Opsz48 from '../components/DesignServicesFill0Wght300Grad0Opsz48'
import IconDesignServicesFill0Wght400Grad0Opsz48 from '../components/DesignServicesFill0Wght400Grad0Opsz48'
import IconDesignServicesFill0Wght500Grad0Opsz48 from '../components/DesignServicesFill0Wght500Grad0Opsz48'
import IconDesignServicesFill0Wght600Grad0Opsz48 from '../components/DesignServicesFill0Wght600Grad0Opsz48'
import IconDesignServicesFill0Wght700Grad0Opsz48 from '../components/DesignServicesFill0Wght700Grad0Opsz48'
import IconDesignServicesFill1Wght100Grad0Opsz48 from '../components/DesignServicesFill1Wght100Grad0Opsz48'
import IconDesignServicesFill1Wght200Grad0Opsz48 from '../components/DesignServicesFill1Wght200Grad0Opsz48'
import IconDesignServicesFill1Wght300Grad0Opsz48 from '../components/DesignServicesFill1Wght300Grad0Opsz48'
import IconDesignServicesFill1Wght400Grad0Opsz48 from '../components/DesignServicesFill1Wght400Grad0Opsz48'
import IconDesignServicesFill1Wght500Grad0Opsz48 from '../components/DesignServicesFill1Wght500Grad0Opsz48'
import IconDesignServicesFill1Wght600Grad0Opsz48 from '../components/DesignServicesFill1Wght600Grad0Opsz48'
import IconDesignServicesFill1Wght700Grad0Opsz48 from '../components/DesignServicesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDesignServices = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDesignServicesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDesignServicesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDesignServicesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDesignServicesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDesignServicesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDesignServicesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDesignServicesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDesignServicesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDesignServicesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDesignServicesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDesignServicesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDesignServicesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDesignServicesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDesignServicesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
