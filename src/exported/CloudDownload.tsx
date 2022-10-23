import IconCloudDownloadFill0Wght100Grad0Opsz48 from '../components/CloudDownloadFill0Wght100Grad0Opsz48'
import IconCloudDownloadFill0Wght200Grad0Opsz48 from '../components/CloudDownloadFill0Wght200Grad0Opsz48'
import IconCloudDownloadFill0Wght300Grad0Opsz48 from '../components/CloudDownloadFill0Wght300Grad0Opsz48'
import IconCloudDownloadFill0Wght400Grad0Opsz48 from '../components/CloudDownloadFill0Wght400Grad0Opsz48'
import IconCloudDownloadFill0Wght500Grad0Opsz48 from '../components/CloudDownloadFill0Wght500Grad0Opsz48'
import IconCloudDownloadFill0Wght600Grad0Opsz48 from '../components/CloudDownloadFill0Wght600Grad0Opsz48'
import IconCloudDownloadFill0Wght700Grad0Opsz48 from '../components/CloudDownloadFill0Wght700Grad0Opsz48'
import IconCloudDownloadFill1Wght100Grad0Opsz48 from '../components/CloudDownloadFill1Wght100Grad0Opsz48'
import IconCloudDownloadFill1Wght200Grad0Opsz48 from '../components/CloudDownloadFill1Wght200Grad0Opsz48'
import IconCloudDownloadFill1Wght300Grad0Opsz48 from '../components/CloudDownloadFill1Wght300Grad0Opsz48'
import IconCloudDownloadFill1Wght400Grad0Opsz48 from '../components/CloudDownloadFill1Wght400Grad0Opsz48'
import IconCloudDownloadFill1Wght500Grad0Opsz48 from '../components/CloudDownloadFill1Wght500Grad0Opsz48'
import IconCloudDownloadFill1Wght600Grad0Opsz48 from '../components/CloudDownloadFill1Wght600Grad0Opsz48'
import IconCloudDownloadFill1Wght700Grad0Opsz48 from '../components/CloudDownloadFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCloudDownload = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCloudDownloadFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCloudDownloadFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCloudDownloadFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCloudDownloadFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCloudDownloadFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCloudDownloadFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCloudDownloadFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCloudDownloadFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCloudDownloadFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCloudDownloadFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCloudDownloadFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCloudDownloadFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCloudDownloadFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCloudDownloadFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
