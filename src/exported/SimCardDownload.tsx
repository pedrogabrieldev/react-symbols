import IconSimCardDownloadFill0Wght100Grad0Opsz48 from '../components/SimCardDownloadFill0Wght100Grad0Opsz48'
import IconSimCardDownloadFill0Wght200Grad0Opsz48 from '../components/SimCardDownloadFill0Wght200Grad0Opsz48'
import IconSimCardDownloadFill0Wght300Grad0Opsz48 from '../components/SimCardDownloadFill0Wght300Grad0Opsz48'
import IconSimCardDownloadFill0Wght400Grad0Opsz48 from '../components/SimCardDownloadFill0Wght400Grad0Opsz48'
import IconSimCardDownloadFill0Wght500Grad0Opsz48 from '../components/SimCardDownloadFill0Wght500Grad0Opsz48'
import IconSimCardDownloadFill0Wght600Grad0Opsz48 from '../components/SimCardDownloadFill0Wght600Grad0Opsz48'
import IconSimCardDownloadFill0Wght700Grad0Opsz48 from '../components/SimCardDownloadFill0Wght700Grad0Opsz48'
import IconSimCardDownloadFill1Wght100Grad0Opsz48 from '../components/SimCardDownloadFill1Wght100Grad0Opsz48'
import IconSimCardDownloadFill1Wght200Grad0Opsz48 from '../components/SimCardDownloadFill1Wght200Grad0Opsz48'
import IconSimCardDownloadFill1Wght300Grad0Opsz48 from '../components/SimCardDownloadFill1Wght300Grad0Opsz48'
import IconSimCardDownloadFill1Wght400Grad0Opsz48 from '../components/SimCardDownloadFill1Wght400Grad0Opsz48'
import IconSimCardDownloadFill1Wght500Grad0Opsz48 from '../components/SimCardDownloadFill1Wght500Grad0Opsz48'
import IconSimCardDownloadFill1Wght600Grad0Opsz48 from '../components/SimCardDownloadFill1Wght600Grad0Opsz48'
import IconSimCardDownloadFill1Wght700Grad0Opsz48 from '../components/SimCardDownloadFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSimCardDownload = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSimCardDownloadFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSimCardDownloadFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSimCardDownloadFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSimCardDownloadFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSimCardDownloadFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSimCardDownloadFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSimCardDownloadFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSimCardDownloadFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSimCardDownloadFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSimCardDownloadFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSimCardDownloadFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSimCardDownloadFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSimCardDownloadFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSimCardDownloadFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
