import IconExposurePlus1Fill0Wght100Grad0Opsz48 from '../components/ExposurePlus1Fill0Wght100Grad0Opsz48'
import IconExposurePlus1Fill0Wght200Grad0Opsz48 from '../components/ExposurePlus1Fill0Wght200Grad0Opsz48'
import IconExposurePlus1Fill0Wght300Grad0Opsz48 from '../components/ExposurePlus1Fill0Wght300Grad0Opsz48'
import IconExposurePlus1Fill0Wght400Grad0Opsz48 from '../components/ExposurePlus1Fill0Wght400Grad0Opsz48'
import IconExposurePlus1Fill0Wght500Grad0Opsz48 from '../components/ExposurePlus1Fill0Wght500Grad0Opsz48'
import IconExposurePlus1Fill0Wght600Grad0Opsz48 from '../components/ExposurePlus1Fill0Wght600Grad0Opsz48'
import IconExposurePlus1Fill0Wght700Grad0Opsz48 from '../components/ExposurePlus1Fill0Wght700Grad0Opsz48'
import IconExposurePlus1Fill1Wght100Grad0Opsz48 from '../components/ExposurePlus1Fill1Wght100Grad0Opsz48'
import IconExposurePlus1Fill1Wght200Grad0Opsz48 from '../components/ExposurePlus1Fill1Wght200Grad0Opsz48'
import IconExposurePlus1Fill1Wght300Grad0Opsz48 from '../components/ExposurePlus1Fill1Wght300Grad0Opsz48'
import IconExposurePlus1Fill1Wght400Grad0Opsz48 from '../components/ExposurePlus1Fill1Wght400Grad0Opsz48'
import IconExposurePlus1Fill1Wght500Grad0Opsz48 from '../components/ExposurePlus1Fill1Wght500Grad0Opsz48'
import IconExposurePlus1Fill1Wght600Grad0Opsz48 from '../components/ExposurePlus1Fill1Wght600Grad0Opsz48'
import IconExposurePlus1Fill1Wght700Grad0Opsz48 from '../components/ExposurePlus1Fill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconExposurePlus1 = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconExposurePlus1Fill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconExposurePlus1Fill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconExposurePlus1Fill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconExposurePlus1Fill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconExposurePlus1Fill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconExposurePlus1Fill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconExposurePlus1Fill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconExposurePlus1Fill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconExposurePlus1Fill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconExposurePlus1Fill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconExposurePlus1Fill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconExposurePlus1Fill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconExposurePlus1Fill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconExposurePlus1Fill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
